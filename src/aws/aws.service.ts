import { Injectable } from '@nestjs/common';
import { ConfigurationOptions } from 'aws-sdk/lib/config';

import { ConfigService } from '../common/providers';

/**
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
 */
@Injectable()
export class AWSService {
  public options: ConfigurationOptions;

  constructor(public config: ConfigService) {
    this.options = {
      accessKeyId: config.get('aws.access_key_id'),
      secretAccessKey: config.get('aws.secret_access_key'),
      region: config.get('aws.region')
    };
  }
}
