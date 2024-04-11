import { Button } from '@/components/ui/button'

import {Loader2} from "lucide-react"
const LoadingBTN = () => {
  return (
    <Button>
        <Loader2 className='animate-spin w-4 h-4'/>
        
    </Button>
  )
}

export default LoadingBTN