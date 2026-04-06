/**
 * Use in MDX: <Alert>message</Alert> or <Alert variant="warning">…</Alert>
 */
export default function Alert({ children, variant = 'info' }) {
  return (
    <aside
      className={`mdx-alert mdx-alert--${variant}`}
      role="note"
      style={{
        padding: '0.75rem 1rem',
        margin: '1rem 0',
        borderRadius: 6,
        borderLeft: '4px solid',
        borderColor:
          variant === 'warning'
            ? '#c27a00'
            : variant === 'error'
              ? '#c62828'
              : '#1565c0',
        background:
          variant === 'warning'
            ? '#fff8e6'
            : variant === 'error'
              ? '#ffebee'
              : '#e3f2fd',
      }}
    >
      {children}
    </aside>
  )
}
