import { TestBed } from '@angular/core/testing';

import { ChatMainBarService } from './chat-main-bar.service';

describe('ChatMainBarService', () => {
  let service: ChatMainBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMainBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
