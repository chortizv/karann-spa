import React, { useState } from "react";
import { Layout, Menu, Button, ConfigProvider } from "antd";
import {
    DashboardOutlined,
    TeamOutlined,
    BuildOutlined,
    CalendarOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import KarannLogo from "../assets/karanncircle.webp";
import "./MainLayout.css";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label
    };
}

const items = [
    getItem("Dashboard", "/app", <DashboardOutlined />),
    getItem("Trabajadores", "/app/trabajadores", <TeamOutlined />),
    getItem("Obras", "/app/obras", <BuildOutlined />),
    getItem("Planificación", "/app/planificacion", <CalendarOutlined />)
];

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const onMenuClick = ({ key }) => {
        navigate(key);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        darkItemBg: "#0d2b6e",
                        darkSubMenuItemBg: "#091e52",
                        darkItemSelectedBg: "#1a5ab8",
                        darkItemHoverBg: "rgba(77,184,239,0.12)",
                        darkItemSelectedColor: "#4db8ef",
                        darkItemColor: "rgba(255,255,255,0.75)",
                        darkItemHoverColor: "#4db8ef",
                    },
                    Layout: {
                        siderBg: "#0d2b6e",
                        triggerBg: "#091e52",
                    }
                }
            }}
        >
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    style={{ background: "#0d2b6e" }}
                >
                    <div className="ml-brand">
                        <img src={KarannLogo} alt="Karann Logo" width={collapsed ? 28 : 36} height={collapsed ? 28 : 36} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }} />
                        {!collapsed && <span className="ml-brand-name" style={{ color: "#3572ccff" }}>KARANN</span>}
                    </div>

                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={items}
                        onClick={onMenuClick}
                        style={{ background: "#0d2b6e", borderInlineEnd: "none" }}
                    />
                </Sider>

                <Layout>
                    <Header
                        style={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            background: "#0d2b6e",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderBottom: "1px solid rgba(77,184,239,0.2)",
                        }}
                    >
                        <span style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.5px" }}>
                            Sistema de Gestión de Cuadrillas
                        </span>
                        <Button
                            type="default"
                            icon={<LogoutOutlined />}
                            onClick={handleLogout}
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(232,37,26,0.6)",
                                color: "#e8251a",
                            }}
                        >
                            Cerrar Sesión
                        </Button>
                    </Header>

                    <Content style={{ margin: "16px" }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: "#ffffff",
                                borderRadius: 8,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>

                    <Footer style={{ textAlign: "center", background: "#040e2a", color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
                        <p className="lp-footer-copy">© {new Date().getFullYear()} Karann SPA — Todos los derechos reservados.</p>
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default MainLayout;
