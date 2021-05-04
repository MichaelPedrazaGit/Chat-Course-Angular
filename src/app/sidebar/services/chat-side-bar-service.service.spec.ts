import { TestBed } from '@angular/core/testing';

import { ChatSideBarServiceService } from './chat-side-bar-service.service';

describe('ChatSideBarServiceService', () => {
  let service: ChatSideBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSideBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
