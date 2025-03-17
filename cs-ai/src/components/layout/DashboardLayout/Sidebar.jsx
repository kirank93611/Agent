// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Drawer,
//   Stack,
//   useMediaQuery,
//   Button,
//   Divider,
//   Typography,
//   useTheme,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton
// } from '@mui/material';
// import {
//   BarChart as ChartBarIcon,
//   Settings as CogIcon,
//   Person as UserCircleIcon,
//   People as UsersIcon,
//   SmartToy as AgentIcon,
//   ExpandLess,
//   ExpandMore,
//   Close
// } from '@mui/icons-material';
// import Logo from '../../common/Logo';
// import ChatIcon from '@mui/icons-material/Chat';
// import ChatbotIcon from '../../chatbot/ChatbotIcon';

// const SIDE_NAV_WIDTH = 280;
// const MOBILE_BREAKPOINT = 'lg';

// const Sidebar = ({ open, onClose }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down(MOBILE_BREAKPOINT));
//   const [settingsOpen, setSettingsOpen] = useState(false);

//   const handleSettingsClick = () => {
//     setSettingsOpen(!settingsOpen);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     if (isMobile) {
//       onClose();
//     }
//   };

//   const items = [
//     {
//       title: 'Overview',
//       path: '/dashboard',
//       icon: <ChartBarIcon />
//     },
//     {
//       title: 'Customers',
//       path: '/dashboard/customers',
//       icon: <UsersIcon />
//     },
//     {
//       title: 'Agents',
//       path: '/dashboard/agents',
//       icon: <AgentIcon />
//     },
//     {
//       title:'AiChat',
//       path:'/dashboard/ai-chat',
//       icon:<ChatIcon />
//     }
//   ];

//   const content = (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//         overflow: 'hidden'
//       }}
//     >
//       <Box sx={{ p: 3 }}>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Logo />
//           {isMobile && (
//             <IconButton
//               onClick={onClose}
//               sx={{ color: 'neutral.400' }}
//             >
//               <Close />
//             </IconButton>
//           )}
//         </Box>
//         <Box
//           sx={{
//             alignItems: 'center',
//             backgroundColor: 'rgba(255, 255, 255, 0.04)',
//             borderRadius: 1,
//             cursor: 'pointer',
//             display: 'flex',
//             justifyContent: 'space-between',
//             mt: 2,
//             p: '12px'
//           }}
//         >
//           <div>
//             <Typography
//               color="inherit"
//               variant="subtitle1"
//             >
//               CS-AI
//             </Typography>
//             <Typography
//               color="neutral.400"
//               variant="body2"
//             >
//               Development-Staging
//             </Typography>
//           </div>
//         </Box>
//       </Box>
//       <Divider sx={{ borderColor: 'neutral.700' }} />
//       <Box
//         component="nav"
//         sx={{
//           flexGrow: 1,
//           px: 2,
//           py: 3,
//           overflowY: 'auto'
//         }}
//       >
//         <List>
//           {items.map((item) => (
//             <ListItemButton
//               key={item.title}
//               onClick={() => handleNavigation(item.path)}
//               selected={location.pathname === item.path}
//               sx={{
//                 borderRadius: 1,
//                 mb: 0.5,
//                 '&.Mui-selected': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)'
//                 },
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.04)'
//                 }
//               }}
//             >
//               <ListItemIcon sx={{ color: 'neutral.400', minWidth: 40 }}>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText 
//                 primary={item.title}
//                 primaryTypographyProps={{
//                   color: 'neutral.400',
//                   fontWeight: 'medium'
//                 }}
//               />
//             </ListItemButton>
//           ))}
//           <ListItemButton
//             onClick={handleSettingsClick}
//             sx={{
//               borderRadius: 1,
//               mb: 0.5,
//               '&:hover': {
//                 backgroundColor: 'rgba(255, 255, 255, 0.04)'
//               }
//             }}
//           >
//             <ListItemIcon sx={{ color: 'neutral.400', minWidth: 40 }}>
//               <CogIcon />
//             </ListItemIcon>
//             <ListItemText 
//               primary="Settings"
//               primaryTypographyProps={{
//                 color: 'neutral.400',
//                 fontWeight: 'medium'
//               }}
//             />
//             {settingsOpen ? <ExpandLess sx={{ color: 'neutral.400' }} /> : <ExpandMore sx={{ color: 'neutral.400' }} />}
//           </ListItemButton>
//           <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton
//                 onClick={() => handleNavigation('/dashboard/settings')}
//                 selected={location.pathname === '/dashboard/settings'}
//                 sx={{
//                   pl: 4,
//                   borderRadius: 1,
//                   mb: 0.5,
//                   '&.Mui-selected': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.08)'
//                   },
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.04)'
//                   }
//                 }}
//               >
//                 <ListItemIcon sx={{ color: 'neutral.400', minWidth: 40 }}>
//                   <CogIcon />
//                 </ListItemIcon>
//                 <ListItemText 
//                   primary="General"
//                   primaryTypographyProps={{
//                     color: 'neutral.400',
//                     fontWeight: 'medium'
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 onClick={() => handleNavigation('/dashboard/settings/account')}
//                 selected={location.pathname === '/dashboard/settings/account'}
//                 sx={{
//                   pl: 4,
//                   borderRadius: 1,
//                   mb: 0.5,
//                   '&.Mui-selected': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.08)'
//                   },
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.04)'
//                   }
//                 }}
//               >
//                 <ListItemIcon sx={{ color: 'neutral.400', minWidth: 40 }}>
//                   <UserCircleIcon />
//                 </ListItemIcon>
//                 <ListItemText 
//                   primary="Account"
//                   primaryTypographyProps={{
//                     color: 'neutral.400',
//                     fontWeight: 'medium'
//                   }}
//                 />
//               </ListItemButton>
//             </List>
//           </Collapse>
//         </List>
//       </Box>
//       <Divider sx={{ borderColor: 'neutral.700' }} />
//       <Box
//         sx={{
//           px: 2,
//           py: 3
//         }}
//       >
//         <Button
//           color="warning"
//           fullWidth
//           onClick={() => {
//             localStorage.removeItem('token');
//             handleNavigation('/login');
//           }}
//           variant="contained"
//         >
//           Logout
//         </Button>
//       </Box>
//     </Box>
//   );

//   if (!isMobile) {
//     return (
//       <Drawer
//         anchor="left"
//         open
//         PaperProps={{
//           sx: {
//             backgroundColor: 'neutral.800',
//             color: 'common.white',
//             width: SIDE_NAV_WIDTH,
//             position: 'fixed',
//             height: '100%'
//           }
//         }}
//         variant="permanent"
//       >
//         {content}
//       </Drawer>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//       onClose={onClose}
//       open={open}
//       PaperProps={{
//         sx: {
//           backgroundColor: 'neutral.800',
//           color: 'common.white',
//           width: SIDE_NAV_WIDTH,
//           height: '100%'
//         }
//       }}
//       sx={{
//         zIndex: theme.zIndex.appBar + 100
//       }}
//       variant="temporary"
//       ModalProps={{
//         keepMounted: true // Better mobile performance
//       }}
//     >
//       {content}
//     </Drawer>
//   );
// };

// export default Sidebar; 