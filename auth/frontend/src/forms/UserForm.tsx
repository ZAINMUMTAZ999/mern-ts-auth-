import {z} from  "zod"
const formSchema =z.object({
    email:z.string().optional(),
    name:z.string().min(1,"name is required"),
    address:z.string().min(1,"address is required"),
    phoneNumber:z.string().min(1,"phoneNumber is required"),
})
type useFormData = z.infer<typeof formSchema> 
 
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LoadingBTN from "./LoadingBTN"
import { User } from "@/User"
import { useEffect } from "react"

type Props = {
    CurrentUser:User;
    onSave:(useFormProfile:useFormData)=>void;
    isLoading : boolean;
}

const UserForm = ({onSave,isLoading,CurrentUser}: Props) => {

const form =useForm<useFormData>({
    resolver: zodResolver(formSchema),
    defaultValues:CurrentUser
})
useEffect(()=>{
form.reset(CurrentUser)
},[form,CurrentUser])

  return (
    <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSave)}>
            <FormField
            control={form.control}
            name="email"
            render={({field})=>(
                <>
                <FormLabel className="text-white">email</FormLabel>
                <FormControl>
                    <Input     {...field}  className="text-white"/>
                
                </FormControl>
                </>
                
            )}
            />
            <FormField
            control={form.control}
            name="name"
            render={({field})=>(
                <>
                <FormLabel className="text-white">name</FormLabel>
                <FormControl>
                    <Input     {...field}  className="text-white"/>
                
                </FormControl>
                </>
                
            )}
            
            />
            <FormField
            control={form.control}
            name="address"
            render={({field})=>(
                <>
                <FormLabel className="text-white">address</FormLabel>
                <FormControl>
                    <Input     {...field} className="text-white" />
                
                </FormControl>
                </>
                
            )}
            
            />
            <FormField
            control={form.control}
            name="phoneNumber"
            render={({field})=>(
                <>
                <FormLabel className="text-white">phoneNumber</FormLabel>
                <FormControl>
                    <Input    className="text-white" {...field}  />
                
                </FormControl>
                </>
                
            )}
            
            />
            {isLoading? 
         <LoadingBTN/>   
        :
        <Button type="submit">Submit</Button>
        }

        </form>

    </Form>
  )
}

export default UserForm