import Main from '/src/components/main/main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Main,
})