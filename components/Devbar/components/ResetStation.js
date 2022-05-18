import { useRouter } from 'next/router'
import { useCallback } from 'react'

const ResetStation = () => {

  const onClick = useCallback(e => {
    console.log('onClick ResetStation')
  }, [])

  const { pathname } = useRouter()

  if (pathname !== '/') return null

  return (
    <div>
      <a href={'/'}>{`resetStation`}</a>
    </div>
  )
}

export default ResetStation