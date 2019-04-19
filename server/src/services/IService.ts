import { Application } from 'express';

export interface IService {
  attach(application: Application): void
}
