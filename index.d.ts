/**
 * Resolves a Promise after a specified amount of time.
 *
 * ```js
 * import * as delay from 'nanodelay'
 *
 * delay(300, "foo").then(result => {
 *   // Executed after 300 milliseconds
 *   result //=> "foo"
 * })
 * ```
 *
 * @param ms Milliseconds to wait before resolving.
 * @param value Argument to be resolved by this Promise.
 */
export function delay (ms: number): Promise<void>
export function delay<T> (ms: number, value: T): Promise<T>
