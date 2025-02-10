import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Get instances of AuthService and Router
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true; // Allow access
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false; // Block access
  }
};
