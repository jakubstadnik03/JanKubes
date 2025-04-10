export interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
}

export interface Service {
  title: string
  description: string
  icon: React.ComponentType
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ThemeColors {
  brand: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
} 