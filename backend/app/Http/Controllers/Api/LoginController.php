<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                'status' => true,
                'message' => 'Login successfully.'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Login failed.'
            ]);
        }
    }
}
