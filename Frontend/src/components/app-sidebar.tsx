import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { motion } from "framer-motion"
import logo from "@/assets/logo.png"
import { LayoutDashboard, Settings, Upload } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const data = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Upload Meal", href: "/upload", icon: Upload },
  { name: "Settings", href: "/setting", icon: Settings },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex gap-3 items-center">
          <img src={logo} className="w-10 h-10 rounded-md" />
          <p className="font-bold text-lg">AI Food Tracker</p>
        </div>
      </SidebarHeader>

      <SidebarContent className="mt-5 flex flex-col gap-2">
        {data.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href

          return (
            <Link
              key={item.href}
              to={item.href}
              className="relative flex items-center gap-3 p-3 mx-5 rounded-lg font-medium"
            >
              {/* active background animation */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-green-200 rounded-lg border border-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon className="w-6 h-6 relative z-10" />
              <span className="relative z-10">{item.name}</span>
            </Link>
          )
        })}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}