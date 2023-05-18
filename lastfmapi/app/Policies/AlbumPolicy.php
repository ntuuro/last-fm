<?php

namespace App\Policies;

use App\Models\User;

class AlbumPolicy
{


    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {

        if ($user->can('create', Artist::class)) {
            return 'Current logged in user is allowed to bookmark albums.';
        } else {
            return 'Not Authorized';
        }
    }
}
