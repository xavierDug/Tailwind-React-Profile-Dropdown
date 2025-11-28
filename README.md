# ProfileDropdown Component

A beautiful, reusable profile dropdown component with modern design, animations, and keyboard shortcuts support.

## Features

- ✨ Modern gradient header with user info
- 🎨 Icon-based quick actions with color-coded sections
- 📱 Responsive design (desktop & mobile variants)
- ⌨️ Keyboard shortcut support (Cmd+Q / Ctrl+Q for logout)
- 🔵 Online status indicator
- 💫 Smooth animations and hover effects
- 🎯 Fully customizable callbacks

## Usage

```tsx
import { ProfileDropdown } from "@/components/profile-dropdown"

function YourComponent() {
  return (
    <ProfileDropdown
      userName="Robin Gemme"
      userEmail="robgemme@gmail.com"
      userRole="SuperAdmin"
      userInitials="RG"
      onProfileClick={() => console.log("Profile clicked")}
      onSettingsClick={() => console.log("Settings clicked")}
      onAppearanceClick={() => console.log("Appearance clicked")}
      onLogout={() => console.log("Logout")}
      variant="desktop" // or "mobile"
    />
  )
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `userName` | `string` | User's display name |
| `userEmail` | `string` | User's email address |
| `userRole` | `string` | User's role/title (shown as badge) |
| `userInitials` | `string` | 1-2 letter initials for avatar |
| `onProfileClick` | `() => void` | Callback when "My Profile" is clicked |
| `onSettingsClick` | `() => void` | Callback when "Settings" is clicked |
| `onAppearanceClick` | `() => void` | Callback when "Appearance" is clicked |
| `onLogout` | `() => void` | Callback when "Sign Out" is clicked |
| `variant` | `"desktop" \| "mobile"` | Display variant (default: "desktop") |

## Variants

### Desktop Variant
- Shows full user info in the trigger button
- Includes descriptive subtitles for menu items
- Displays chevron indicators on hover
- More spacious layout

### Mobile Variant
- Shows only avatar in the trigger button
- Simplified menu items (icons + text only)
- Optimized for smaller screens
- Maintains all functionality

## Keyboard Shortcuts

- **Cmd+Q** (Mac) or **Ctrl+Q** (Windows/Linux): Quick logout
  - Works globally when dropdown is mounted
  - Automatically detects platform

## Dependencies

Required components from your UI library:
- `DropdownMenu` family from `@/components/ui/dropdown-menu`
- `Avatar`, `AvatarImage`, `AvatarFallback` from Radix UI
- `Badge` from `@/components/ui/badge`
- Lucide icons: `User`, `Settings`, `HelpCircle`, `Shield`, `LogOut`, `ChevronRight`
- FontAwesome: `faPalette`

## Customization

### Colors
The component uses Tailwind CSS classes and can be customized through your theme:
- Primary color: `bg-primaryColor`, `text-primaryColor`
- Action colors: `text-blue-500`, `text-purple-500`
- Status indicator: `bg-green-500` (online status)

### Menu Items
Currently includes:
1. **My Profile** - Purple icon
2. **Settings** - Blue icon  
3. **Appearance** - Purple palette icon
4. **Help & Support** - Muted
5. **Privacy & Security** - Muted
6. **Sign Out** - Red (danger state)

You can modify the component to add/remove menu items as needed.

## Example Integration

```tsx
// In your navbar or header component
const firstName = getClaimValue('FirstName');
const lastName = getClaimValue('LastName');
const userName = `${firstName} ${lastName}`;
const userEmail = user?.email || "";
const userRole = user?.roles?.[0] || "Member";
const userInitials = `${firstName[0]}${lastName[0]}`.toUpperCase();

<ProfileDropdown
  userName={userName}
  userEmail={userEmail}
  userRole={userRole}
  userInitials={userInitials}
  onProfileClick={() => openSettings("profile")}
  onSettingsClick={() => openSettings("settings")}
  onAppearanceClick={() => openSettings("appearance")}
  onLogout={handleLogout}
  variant="desktop"
/>
```

## Design Philosophy

This component follows modern UI/UX best practices:
- **Visual Hierarchy**: Gradient header separates user info from actions
- **Color Coding**: Different colors for different action types
- **Feedback**: Hover states, transitions, and animations
- **Accessibility**: Keyboard shortcuts, proper ARIA labels, focus states
- **Consistency**: Matches shadcn/ui design system

## License

Free to use in your projects! 🚀
