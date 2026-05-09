import React, { memo, useCallback, useMemo, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  webpSrc?: string
  fallbackSrc?: string
  priority?: boolean
}

function getUnsplashWebpUrl(src?: string): string | undefined {
  if (!src) return undefined

  try {
    const parsed = new URL(src)
    if (!parsed.hostname.includes('images.unsplash.com')) return undefined

    parsed.searchParams.set('fm', 'webp')
    parsed.searchParams.set('auto', 'format')
    if (!parsed.searchParams.has('q')) {
      parsed.searchParams.set('q', '75')
    }

    return parsed.toString()
  } catch {
    return undefined
  }
}

function ImageWithFallbackComponent(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const {
    src,
    fallbackSrc,
    webpSrc,
    alt,
    style,
    className,
    priority,
    loading,
    decoding,
    fetchPriority,
    ...rest
  } = props

  const resolvedSrc = fallbackSrc ?? src
  const resolvedWebpSrc = useMemo(
    () => webpSrc ?? getUnsplashWebpUrl(resolvedSrc),
    [resolvedSrc, webpSrc],
  )
  const resolvedLoading = loading ?? (priority ? 'eager' : 'lazy')
  const resolvedDecoding = decoding ?? 'async'
  const resolvedFetchPriority = fetchPriority ?? (priority ? 'high' : 'auto')

  const handleError = useCallback(() => {
    setDidError(true)
  }, [])

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          loading={resolvedLoading}
          decoding={resolvedDecoding}
          {...rest}
          data-original-url={resolvedSrc}
        />
      </div>
    </div>
  ) : resolvedWebpSrc ? (
    <picture>
      <source srcSet={resolvedWebpSrc} type="image/webp" />
      <img
        src={resolvedSrc}
        alt={alt}
        className={className}
        style={style}
        loading={resolvedLoading}
        decoding={resolvedDecoding}
        fetchPriority={resolvedFetchPriority}
        {...rest}
        onError={handleError}
      />
    </picture>
  ) : (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      fetchPriority={resolvedFetchPriority}
      {...rest}
      onError={handleError}
    />
  )
}

export const ImageWithFallback = memo(ImageWithFallbackComponent)
