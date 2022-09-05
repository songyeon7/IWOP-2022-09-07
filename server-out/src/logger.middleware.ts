import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();

  use(req: any, res: any, next: () => void) {
    res.on('finish', () => {
      this.logger.log(
        `IP: ${req.ip} Method: ${req.method} Code: ${res.statusCode}`,
        req.originalUrl,
      );
    });
    next();
  }
}
