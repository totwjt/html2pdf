// Export your core functionality here
export * from './types';
export * from './utils';
export * from './store'
export * from './api'
export * from './models'
export * from './config'

export function greet(name: string): string {
  return `Hello, ${name}!`
}

export function HelloWorldCore(): string {
  return 'Core package loaded successfully!'
}
