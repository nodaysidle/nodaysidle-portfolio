import { useEffect, useMemo, useState } from 'react'
import { texture } from '../ascii.js'

/**
 * Dense glyph field — densifies on lock / active, dissolves on idle.
 * seed keeps worlds visually distinct.
 */
export default function AsciiField({
  seed = 1,
  rows = 18,
  cols = 56,
  dense = false,
  className = '',
}) {
  const [tick, setTick] = useState(0)
  const reduce = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (reduce || !dense) return undefined
    const id = window.setInterval(() => setTick((t) => t + 1), 900)
    return () => window.clearInterval(id)
  }, [dense, reduce])

  const field = useMemo(
    () => texture(rows, cols, seed + (dense ? tick : 0)),
    [rows, cols, seed, dense, tick],
  )

  return (
    <pre
      className={`ascii-field${dense ? ' is-dense' : ''}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      {field}
    </pre>
  )
}
