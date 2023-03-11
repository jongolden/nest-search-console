import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UrlInspectionService } from './services/url-inspection.service';

@Module({
  imports: [HttpModule],
  providers: [UrlInspectionService],
  exports: [UrlInspectionService],
})
export class GoogleSearchConsoleModule {}
