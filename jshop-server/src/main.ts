import { RequestMethod, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.enableVersioning({
		type: VersioningType.URI
	});
	app.setGlobalPrefix('api', {
		exclude: []
	})
	const port = process.env.PORT || 3000;
	await app.listen(port, () => {
		console.log(`Server is listening on port: http://localhost:${port}`);
	})
	.catch((err) => console.log(err));
}

bootstrap()
	.catch(err => console.log(err));
