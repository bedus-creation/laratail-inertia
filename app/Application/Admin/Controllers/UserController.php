<?php

namespace App\Application\Admin\Controllers;

use App\Application\Admin\Requests\UserStoreRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UserController extends Controller
{
    public function create()
    {
        return Inertia::render('Admin/Users/Create');
    }
    public function store(UserStoreRequest $userStoreRequest)
    {
        return redirect()->back()->with('success', 'User has been created successfully.');
    }
}
