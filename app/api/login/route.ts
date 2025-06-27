import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession } from '@/lib/session'

export async function POST(req: Request) {
        const body = await req.json();
        try {
                const resp: any = await apiFetch(apiRoutes.auth.login, {
                    method: 'POST',
                    body: JSON.stringify(body),
                });

               if (resp.ok) {
                    const data = await resp.json();

                    console.log('toekn', data.access_token);
                    
                    await createSession(data.access_token);
                    return NextResponse.json({ success: true });
                } else {
                        const msg =  await resp.json();
                        return NextResponse.json({ success: false, msg});
                }
        } catch(err) {
                console.log(err);
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }    
}