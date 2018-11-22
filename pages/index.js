// This is the Link API
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ReactMaterialIcon = dynamic(import('material-icons-react'), {
  ssr: false
})


const Index = () => (
    <div>
        <ReactMaterialIcon icon="dashboard" size={16} />
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index