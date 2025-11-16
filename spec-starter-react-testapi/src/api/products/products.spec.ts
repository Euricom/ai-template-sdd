import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProduct, getProducts, type GetProductsParams } from "./products";
import type { ApiInstance } from "@/hooks/useApiInstance";
import type { ProductDTO, ProductListDTO } from "./types";

// Mock data helpers for creating test DTOs
// These represent the raw API responses before mapping
const createMockProductDTO = (overrides?: Partial<ProductDTO>): ProductDTO => {
  return {
    id: 1,
    sku: "TEST-SKU-001",
    title: "Test Product",
    stocked: true,
    price: 99.99,
    desc: "Test description",
    image: "https://example.com/image.jpg",
    basePrice: 119.99,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
    ...overrides,
  };
};

const createMockProductListDTO = (
  items: ProductDTO[],
  overrides?: Partial<ProductListDTO>
): ProductListDTO => {
  return {
    items,
    total: items.length,
    page: 1,
    pageSize: 10,
    ...overrides,
  };
};

describe("Product API", () => {
  // Create a mock ApiInstance for each test
  let mockApi: ApiInstance;

  beforeEach(() => {
    // Reset the mock before each test
    // Create a fresh mock ApiInstance with all required methods
    mockApi = {
      get: vi.fn(),
      put: vi.fn(),
      post: vi.fn(),
      delete: vi.fn(),
      fetch: vi.fn(),
    } as unknown as ApiInstance;
  });

  describe("getProduct", () => {
    it("should fetch a single product and map dates correctly", async () => {
      // Arrange: Set up mock API response
      const mockProductDTO = createMockProductDTO({
        id: 123,
        sku: "PROD-123",
        title: "Sample Product",
        createdAt: "2024-03-15T10:30:00Z",
        updatedAt: "2024-03-16T14:45:00Z",
      });

      // Mock the API get method to return our test data
      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductDTO);

      // Act: Call the function under test
      const result = await getProduct(mockApi, "123");

      // Assert: Verify the API was called correctly
      expect(mockApi.get).toHaveBeenCalledTimes(1);
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products/123");

      // Assert: Verify the result is correctly mapped
      expect(result.id).toBe(123);
      expect(result.sku).toBe("PROD-123");
      expect(result.title).toBe("Sample Product");
      // Verify dates are converted from strings to Date objects
      expect(result.createdAt).toBeInstanceOf(Date);
      expect(result.updatedAt).toBeInstanceOf(Date);
      expect(result.createdAt.toISOString()).toBe("2024-03-15T10:30:00.000Z");
      expect(result.updatedAt.toISOString()).toBe("2024-03-16T14:45:00.000Z");
    });

    it("should handle products with optional fields", async () => {
      // Arrange: Create a product without optional fields
      const mockProductDTO = createMockProductDTO({
        id: 456,
        desc: undefined,
        image: undefined,
        basePrice: undefined,
      });

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductDTO);

      // Act
      const result = await getProduct(mockApi, "456");

      // Assert: Verify optional fields are handled correctly
      expect(result.id).toBe(456);
      expect(result.desc).toBeUndefined();
      expect(result.image).toBeUndefined();
      expect(result.basePrice).toBeUndefined();
      // Required fields should still be present
      expect(result.createdAt).toBeInstanceOf(Date);
      expect(result.updatedAt).toBeInstanceOf(Date);
    });

    it("should propagate API errors", async () => {
      // Arrange: Mock API to throw an error
      const apiError = new Error("Product not found");
      vi.spyOn(mockApi, "get").mockRejectedValue(apiError);

      // Act & Assert: Verify the error is propagated
      await expect(getProduct(mockApi, "999")).rejects.toThrow(
        "Product not found"
      );
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products/999");
    });
  });

  describe("getProducts", () => {
    it("should fetch products list with default parameters", async () => {
      // Arrange: Create mock product list response
      const mockProducts = [
        createMockProductDTO({ id: 1, sku: "PROD-1" }),
        createMockProductDTO({ id: 2, sku: "PROD-2" }),
      ];
      const mockProductListDTO = createMockProductListDTO(mockProducts);

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act: Call without parameters (should use defaults)
      const result = await getProducts(mockApi);

      // Assert: Verify API was called with empty query params
      expect(mockApi.get).toHaveBeenCalledTimes(1);
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products", {
        query: {
          page: undefined,
          pageSize: undefined,
          sortBy: undefined,
          filter: undefined,
        },
      });

      // Assert: Verify results are mapped correctly
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(1);
      expect(result[0].sku).toBe("PROD-1");
      expect(result[1].id).toBe(2);
      expect(result[1].sku).toBe("PROD-2");
      // Verify dates are mapped correctly
      expect(result[0].createdAt).toBeInstanceOf(Date);
      expect(result[1].createdAt).toBeInstanceOf(Date);
    });

    it("should fetch products with pagination parameters", async () => {
      // Arrange
      const mockProducts = [createMockProductDTO({ id: 1 })];
      const mockProductListDTO = createMockProductListDTO(mockProducts, {
        page: 2,
        pageSize: 20,
        total: 50,
      });

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act: Call with pagination params
      const params: GetProductsParams = {
        page: 2,
        pageSize: 20,
      };
      const result = await getProducts(mockApi, params);

      // Assert: Verify API was called with correct query params
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products", {
        query: {
          page: 2,
          pageSize: 20,
          sortBy: undefined,
          filter: undefined,
        },
      });

      expect(result).toHaveLength(1);
    });

    it("should fetch products with sortBy parameter", async () => {
      // Arrange
      const mockProducts = [createMockProductDTO({ id: 1 })];
      const mockProductListDTO = createMockProductListDTO(mockProducts);

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act: Call with sortBy param
      const params: GetProductsParams = {
        sortBy: "price",
      };
      await getProducts(mockApi, params);

      // Assert: Verify sortBy is passed to API
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products", {
        query: {
          page: undefined,
          pageSize: undefined,
          sortBy: "price",
          filter: undefined,
        },
      });
    });

    it("should fetch products with filter parameter", async () => {
      // Arrange
      const mockProducts = [createMockProductDTO({ id: 1 })];
      const mockProductListDTO = createMockProductListDTO(mockProducts);

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act: Call with filter param
      const params: GetProductsParams = {
        filter: "stocked:true",
      };
      await getProducts(mockApi, params);

      // Assert: Verify filter is passed to API
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products", {
        query: {
          page: undefined,
          pageSize: undefined,
          sortBy: undefined,
          filter: "stocked:true",
        },
      });
    });

    it("should fetch products with all parameters combined", async () => {
      // Arrange
      const mockProducts = [
        createMockProductDTO({ id: 1 }),
        createMockProductDTO({ id: 2 }),
      ];
      const mockProductListDTO = createMockProductListDTO(mockProducts);

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act: Call with all params
      const params: GetProductsParams = {
        page: 3,
        pageSize: 15,
        sortBy: "title",
        filter: "price<100",
      };
      const result = await getProducts(mockApi, params);

      // Assert: Verify all params are passed correctly
      expect(mockApi.get).toHaveBeenCalledWith("/api/v1/products", {
        query: {
          page: 3,
          pageSize: 15,
          sortBy: "title",
          filter: "price<100",
        },
      });

      expect(result).toHaveLength(2);
    });

    it("should handle empty product list", async () => {
      // Arrange: Empty list response
      const mockProductListDTO = createMockProductListDTO([], {
        total: 0,
        page: 1,
        pageSize: 10,
      });

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act
      const result = await getProducts(mockApi);

      // Assert: Should return empty array
      expect(result).toHaveLength(0);
      expect(Array.isArray(result)).toBe(true);
    });

    it("should propagate API errors", async () => {
      // Arrange: Mock API to throw an error
      const apiError = new Error("Failed to fetch products");
      vi.spyOn(mockApi, "get").mockRejectedValue(apiError);

      // Act & Assert: Verify error is propagated
      await expect(getProducts(mockApi)).rejects.toThrow(
        "Failed to fetch products"
      );
    });

    it("should map dates correctly for all products in list", async () => {
      // Arrange: Create products with different dates
      const mockProducts = [
        createMockProductDTO({
          id: 1,
          createdAt: "2024-01-01T00:00:00Z",
          updatedAt: "2024-01-02T00:00:00Z",
        }),
        createMockProductDTO({
          id: 2,
          createdAt: "2024-02-01T12:30:00Z",
          updatedAt: "2024-02-02T15:45:00Z",
        }),
      ];
      const mockProductListDTO = createMockProductListDTO(mockProducts);

      vi.spyOn(mockApi, "get").mockResolvedValue(mockProductListDTO);

      // Act
      const result = await getProducts(mockApi);

      // Assert: Verify all dates are mapped correctly
      expect(result[0].createdAt).toBeInstanceOf(Date);
      expect(result[0].createdAt.toISOString()).toBe(
        "2024-01-01T00:00:00.000Z"
      );
      expect(result[0].updatedAt.toISOString()).toBe(
        "2024-01-02T00:00:00.000Z"
      );

      expect(result[1].createdAt).toBeInstanceOf(Date);
      expect(result[1].createdAt.toISOString()).toBe(
        "2024-02-01T12:30:00.000Z"
      );
      expect(result[1].updatedAt.toISOString()).toBe(
        "2024-02-02T15:45:00.000Z"
      );
    });
  });
});
