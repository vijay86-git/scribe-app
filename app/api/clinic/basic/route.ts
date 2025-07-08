import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession } from '@/lib/session'


export async function GET(req: Request) {
        try {
                const resp: Response = await apiFetch(apiRoutes.clinicDetails, {
                    method: 'GET'
                });

               if (resp.ok) {
                    const data = await resp.json();
                    return NextResponse.json({ success: true, data });
                } else {
                        const msg =  await resp.json();
                        return NextResponse.json({ success: false, msg});
                }
        } catch(err) {
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }    
}

export async function POST(req: Request) {

        const formData = await req.formData();

        console.log(formData.get('upload_clinic_logo'), 909);

        
        try {
                const resp: Response = await apiFetch(`${apiRoutes.updateClinicBasicDetails}`, {
                        method: 'POST',
                        headers: {
                              Authorization: `Bearer `,
                        },
                        body: formData
                });

                if (resp.ok) {
                    const data = await resp.json();
                    return NextResponse.json({ success: true });
                } else {
                        const msg =  await resp.json();
                        return NextResponse.json({ success: false, msg});
                }
        } catch(err) {
                        return NextResponse.json({ success: false, msg: { message: "Something went wrong!"} });
        }  
}