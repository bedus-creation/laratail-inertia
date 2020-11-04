<?php

namespace App\Application\Admin\Controllers;

use App\Application\Admin\Requests\UserStoreRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function store(UserStoreRequest $userStoreRequest)
    {
        return redirect()->back()->with('success', 'User has been created successfully.');
    }
}
