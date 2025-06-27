import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession, decrypt } from '@/lib/session'

export async function POST(req: Request) {
        const body = await req.json();
        const cookie = (await cookies()).get('session')?.value;
        const session = await decrypt(cookie);
        try {
                const api_url = `${apiRoutes.histories.list}?page=${body.page}&q=${body.q}`;
                const resp: any = await apiFetch(api_url, {
                    method: 'GET',
                    headers: {
                              Authorization: `Bearer ${session.token}`,
                              'X-Custom-Header': 'value',
                    },
                });
               if (resp.ok) {
                    const data = await resp.json();
                    return NextResponse.json({ success: true, data });
                } else {
                        const msg =  await resp.json();
                        return NextResponse.json({ success: false, msg});
                }
        } catch(err) {
                console.log(err);
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }    
}