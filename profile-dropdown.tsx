"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { User, Settings, HelpCircle, Shield, LogOut, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProfileDropdownProps {
    userName: string
    userEmail: string
    userRole: string
    userInitials: string
    onProfileClick: () => void
    onSettingsClick: () => void
    onAppearanceClick: () => void
    onLogout: () => void
    variant?: "desktop" | "mobile"
}

export function ProfileDropdown({
    userName,
    userEmail,
    userRole,
    userInitials,
    onProfileClick,
    onSettingsClick,
    onAppearanceClick,
    onLogout,
    variant = "desktop",
}: ProfileDropdownProps) {
    // Keyboard shortcut for logout (Cmd+Q on Mac, Ctrl+Q on Windows)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'q') {
                e.preventDefault()
                onLogout()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onLogout])

    const isDesktop = variant === "desktop"

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                {isDesktop ? (
                    <button className="border border-border flex p-2 items-center rounded-xl hover:bg-secondary transition-all duration-200 hover:shadow-md focus:outline-none">
                        <div className="relative flex rounded-full">
                            <Avatar className="w-8 h-8 shrink-0">
                                <AvatarImage className="rounded-full w-full h-full object-cover" src="" />
                                <AvatarFallback className="rounded-full w-full h-full flex items-center justify-center bg-linear-to-br from-primaryColor to-primaryColor/80 text-white font-semibold text-sm">
                                    {userInitials}
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div className="flex-col ms-3 items-start text-left">
                            <p className="text-sm font-medium leading-none">{userName}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{userRole}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 ml-2 text-muted-foreground" />
                    </button>
                ) : (
                    <button className="relative flex rounded-full focus:outline-none">
                        <Avatar className="w-9 h-9 shrink-0">
                            <AvatarImage className="rounded-full w-full h-full object-cover" src="" />
                            <AvatarFallback className="rounded-full w-full h-full flex items-center justify-center bg-linear-to-br from-primaryColor to-primaryColor/80 text-white font-semibold text-sm">
                                {userInitials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                    </button>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 p-0" align="end" sideOffset={8}>
                {/* User Info Section */}
                <div className="px-4 py-3 bg-linear-to-br from-primaryColor to-primaryColor/90">
                    <div className="flex items-start gap-3">
                        <Avatar className="w-12 h-12 shrink-0">
                            <AvatarImage className="rounded-full w-full h-full object-cover" src="" />
                            <AvatarFallback className="rounded-full w-full h-full flex items-center justify-center bg-white/20 text-white font-bold backdrop-blur-sm">
                                {userInitials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white truncate">{userName}</p>
                            <p className="text-xs text-white/80 truncate mt-0.5">{userEmail}</p>
                            <Badge className="mt-2 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs">
                                {userRole}
                            </Badge>
                        </div>
                    </div>
                </div>

                <DropdownMenuSeparator className="my-0" />

                {/* Quick Actions */}
                <div className="p-1.5">
                    <DropdownMenuItem
                        onClick={onProfileClick}
                        className="cursor-pointer py-2.5 px-3 rounded-md group"
                    >
                        {isDesktop ? (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <User className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">My Profile</p>
                                        <p className="text-xs text-muted-foreground">View and edit profile</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ) : (
                            <>
                                <User className="w-4 h-4 mr-3 text-primary" />
                                <span className="text-sm font-medium">My Profile</span>
                            </>
                        )}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={onSettingsClick}
                        className="cursor-pointer py-2.5 px-3 rounded-md group"
                    >
                        {isDesktop ? (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <Settings className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Settings</p>
                                        <p className="text-xs text-muted-foreground">Manage preferences</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ) : (
                            <>
                                <Settings className="w-4 h-4 mr-3 text-blue-500" />
                                <span className="text-sm font-medium">Settings</span>
                            </>
                        )}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={onAppearanceClick}
                        className="cursor-pointer py-2.5 px-3 rounded-md group"
                    >
                        {isDesktop ? (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                        <FontAwesomeIcon icon={faPalette} className="w-4 h-4 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Appearance</p>
                                        <p className="text-xs text-muted-foreground">Theme and display</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faPalette} className="w-4 h-4 mr-3 text-purple-500" />
                                <span className="text-sm font-medium">Appearance</span>
                            </>
                        )}
                    </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="my-0" />

                {/* Additional Options */}
                <div className="p-1.5">
                    <DropdownMenuItem className="cursor-pointer py-2 px-3 rounded-md">
                        <HelpCircle className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span className="text-sm">Help & Support</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer py-2 px-3 rounded-md">
                        <Shield className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span className="text-sm">Privacy & Security</span>
                    </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="my-0" />

                {/* Logout */}
                <div className="p-1.5">
                    <DropdownMenuItem
                        onClick={onLogout}
                        className="cursor-pointer py-2 px-3 rounded-md text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 focus:bg-red-50 dark:focus:bg-red-950/50"
                    >
                        <LogOut className="w-4 h-4 mr-3" />
                        <span className="text-sm font-medium">Sign Out</span>
                        <kbd className="ml-auto inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                            {typeof navigator !== 'undefined' && navigator.platform.toLowerCase().includes('mac') ? '⌘' : 'Ctrl+'}Q
                        </kbd>
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
