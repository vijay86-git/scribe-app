'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema } from '@/schemas/login-schema'

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  //const router = useRouter();

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = {
      email: form.email.value,
      password: form.password.value,
    };

    const result = loginSchema.safeParse(formData);

    if ( ! result.success) {
      setErrors(result.error.flatten().fieldErrors as any);
      return;
    }

    setErrors({});

    setIsSubmitting(true);

    try {
          const res = await login(formData);
          const res: any = await fetch('/api/login', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(formData),
                        });
          const data = await res.json();
          if (data.success) {
             router.push('/dashboard');
          } else {
             setServerMessage(res.msg);
          }
    } catch (err: any) {
        setServerMessage('Something went wrong!');
    }
 }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Log In as Clinic</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-6">
              {serverMessage && <p className="text-red-500 text-xs">{serverMessage}</p>}

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  name="email"
                  defaultValue="vijay.singh@adgonline.in"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" disabled={isSubmitting} defaultValue="12345678" />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  Let's get started
                </Button>
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
