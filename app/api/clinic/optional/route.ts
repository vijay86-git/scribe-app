import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession } from '@/lib/session'

export async function POST(req: Request) {

        const body = await req.json();

        // const cookie = (await cookies()).get('session')?.value;
        // const session = await decrypt(cookie);

        // if (!session || !session.token) {
        //   return NextResponse.json({ success: false, msg: { message: "Unauthorized" } }, { status: 401 });
        // }    

        try {
                const resp: Response = await apiFetch(`${apiRoutes.updateClinicOptionalDetails}`, {
                        method: 'POST',
                        body: JSON.stringify(body)
                });

                if (resp.ok) {
                    const data = await resp.json();
                    console.log(data, 119090)
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