import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guard/auth.guard";

@Controller('dashboard')

export class DashboardController {
    @UseGuards(AuthGuard)
    @Get('/')
    welcom() {
        return 'Welcome to the dashboard';
    }
}