import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { LockOutlined, UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import KarannLogo from "../../assets/karanncircle.webp";
import "./LoginPage.css";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = ({ username, password }) => {
        setLoading(true);
        setError(false);
        setTimeout(() => {
            const ok = login(username, password);
            if (ok) {
                navigate("/app");
            } else {
                setError(true);
                setLoading(false);
            }
        }, 600);
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-logo">
                    <img src={KarannLogo} alt="Karann Logo" width={64} height={64} />
                    <h1 className="login-brand" style={{ color: "#3572ccff" }}>KARANN</h1>
                    <p className="login-subtitle">Sistema de Gestión de Cuadrillas</p>
                </div>

                {error && (
                    <Alert
                        title="Credenciales incorrectas. Intenta de nuevo."
                        type="error"
                        showIcon
                        style={{ marginBottom: 20 }}
                    />
                )}

                <Form
                    name="login"
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Ingresa tu usuario" }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Usuario"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Ingresa tu contraseña" }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Contraseña"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={loading}
                            className="login-btn"
                        >
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                </Form>

                <Link to="/" className="login-back">
                    <ArrowLeftOutlined /> Volver al sitio
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
