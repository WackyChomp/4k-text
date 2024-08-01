import Image from 'next/image'

const Loader = () => {
  const loaderIcon=`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvYWRlciI+PHBhdGggZD0iTTEyIDJ2NCIvPjxwYXRoIGQ9Im0xNi4yIDcuOCAyLjktMi45Ii8+PHBhdGggZD0iTTE4IDEyaDQiLz48cGF0aCBkPSJtMTYuMiAxNi4yIDIuOSAyLjkiLz48cGF0aCBkPSJNMTIgMTh2NCIvPjxwYXRoIGQ9Im00LjkgMTkuMSAyLjktMi45Ii8+PHBhdGggZD0iTTIgMTJoNCIvPjxwYXRoIGQ9Im00LjkgNC45IDIuOSAyLjkiLz48L3N2Zz4=`

  return (
    <div>
      <Image src={loaderIcon} alt='loader-icon' 
        width={50} height={50} className='animate-spin'
      />
      Loading...
    </div>
  )
}

export default Loader