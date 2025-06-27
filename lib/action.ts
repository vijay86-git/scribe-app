"use server";


import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';
import { createSession } from '@/lib/session'


export async function login(body) {

	try {
	        const resp: any = await apiFetch(apiRoutes.auth.login, {
	            method: 'POST',
	            body: JSON.stringify(body),
	        });

	        console.log(JSON.stringify(body), 999000)

	       if (resp.ok) {
	            const data = await resp.json();
	            await createSession(data.access_token);
	            return NextResponse.json({ success: true });
	        } else {
	                const msg =  await resp.json();
	                return NextResponse.json({ success: false, msg});
	        }
	} catch(err) {
	                return NextResponse.json({ success: false, msg: "Something went wrong"});
	}    
}