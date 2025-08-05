import { useApp } from "../ThemedApp";
// Components from MUI Material
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
} from "@mui/icons-material";

export default function Header() {
    const { showForm, setShowForm } = useApp();

    return (
        <AppBar position="static">
            <ToolBar>
                <IconButton color="inherit"
                    edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
                <Box>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        edge="end">
                        <LightModeIcon />
                    </IconButton>
                </Box>
            </ToolBar>
        </AppBar>
    )
}