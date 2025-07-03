import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession, decrypt } from '@/lib/session'

export async function GET(req: Request) {
        const cookie = (await cookies()).get('session')?.value;
        const session = await decrypt(cookie);
        if (!session || !session.token) {
          return NextResponse.json({ success: false, msg: { message: "Unauthorized" } }, { status: 401 });
        }

        try {
                const resp: Response = await apiFetch(`${apiRoutes.profile}`, {
                    method: 'GET',
                    headers: {
                              Authorization: `Bearer ${session.token}`
                    },
                });
               if (resp.ok) {
                    const data = await resp.json();
                    return NextResponse.json({ success: true, data: data.user });
                } else {
                        const msg =  await resp.json();
                        return NextResponse.json({ success: false, msg});
                }
        } catch(err) {
                console.log(err);
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }    
}

export async function POST(req: Request) {
        const body = await req.json();
        const cookie = (await cookies()).get('session')?.value;
        const session = await decrypt(cookie);
        if (!session || !session.token) {
          return NextResponse.json({ success: false, msg: { message: "Unauthorized" } }, { status: 401 });
        }

        try {
                const resp: Response = await apiFetch(`${apiRoutes.profile}`, {
                    method: 'POST',
                    body: JSON.stringify(body),
                });

                const data = await resp.json();

                if (!resp.ok) {
                    return NextResponse.json({ success: false, msg: data });
                }

                if (data?.msg?.errors) {
                    return NextResponse.json({ success: false, form_validation: data.msg.errors });
                }

                    return NextResponse.json({ success: true });

               // if (resp.ok) {
               //      const data = await resp.json();
               //      //return NextResponse.json({ success: true });
               //      if (typeof data?.msg?.errors != "undefined") {
               //          return NextResponse.json({ success: false, form_validation: data.msg.errors });
               //      } else {
               //          return NextResponse.json({ success: true });
               //      }

               //  } else {
               //          const msg =  await resp.json();
               //          return NextResponse.json({ success: false, msg});
               //  }
        } catch(err) {
                console.log(err);
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }    
}
