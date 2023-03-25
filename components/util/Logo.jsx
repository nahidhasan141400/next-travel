import Link from "next/link"


const Logo = () => {

  return (
    <div style={{
        position:"relative",
        height:"100%"
    }}>
      <Link href={"/"}>
        <img style={{height:"100%"  ,position:"relative"}} src="/logo/logo.png" alt="" />
      </Link>

    </div>
  )
}

export default Logo