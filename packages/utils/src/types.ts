/**
 * Generic function type
 */
export type Fn = (...args: any[]) => any

/**
 * Generic object type
 */
export type Obj = Record<string, any>

/**
 * Nullable type
 */
export type Nullable<T> = T | null

/**
 * Optional type
 */
export type Optional<T> = T | undefined

/**
 * Array element type
 */
export type ElementType<T extends any[]> = T extends (infer U)[] ? U : never