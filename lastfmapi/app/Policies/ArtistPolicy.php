<?php

namespace App\Policies;

use App\Models\Artist;
use App\Models\User;

class ArtistPolicy
{

    public function create(User $user)
    {

        if ($user->can('create', Artist::class)) {
            return 'Current logged in user is allowed to bookmark artists.';
        } else {
            return 'Not Authorized';
        }
    }
}
