import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'

export default function Markdown(options) {
  const { html: rawHtml } = options
  const html = decodeURIComponent(rawHtml)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block)
      })
    }
  }, [html])

  return (
    <div
      className="markdown-body"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
