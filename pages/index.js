// Import components
import styles from "./index.module.scss";
import Modal from "../components/commons/modal/modal";
import ModalForm from "../components/commons/form/form";

export default function Home() {
  const handleSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className={styles.text_container}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <h1>ProLineSI Next.js Template</h1>
      <hr />
      <Modal
        title="Prueba"
        body={
          <ModalForm
            handleSubmit={handleSubmit}
            resultToFormData={false}
            button={
              <button
                style={{
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 20,
                  backgroundColor: "var(--main-color)",
                  color: "#ffffff",
                }}
              >
                Boton de envio ejemplo
              </button>
            }
            inputs={[
              {
                type: "text",
                name: "text",
                label: "Texto",
                variant: "filled",
                required: true,
                autofocus: true,
                disabled: false,
                readOnly: false,
                validatable: true,
                value: "Nombre Prueba", 
                // End adornment example
                endAdornment: <img src="/logo.svg" style={{ width: 50 }} />,
              },
              {
                type: "text",
                multiline: { rows: 2 },
                name: "textArea",
                label: "Text Area",
                variant: "standard",
                helperTexts: [
                  "Ejemplo de múltiples helpers texts",
                  "Ejemplo de múltiples helpers texts",
                ],
              },
              {
                type: "number",
                name: "number",
                label: "Number",
                variant: "outlined",
                validatable: true,
                value: "2",
              },
              {
                type: "select",
                options: [
                  { value: 1, label: "Opcion 1" },
                  { value: 2, label: "Opcion 2" },
                ],
                name: "select",
                label: "Select",
                variant: "outlined",
                required: true,
                helperTexts: ["Seleccioná una opción"],
              },
              {
                type: "email",
                name: "email",
                label: "Email",
                validatable: true,
                value: "email@email.com",
                // Start adornment example
                startAdornment: <img src="/logo.svg" style={{ width: 50 }} />,
              },
              {
                type: "password",
                name: "password1",
                label: "Contraseña 1",
                validatable: true,
                // Pass Icons example
                passIcons: {
                  show: <span>Mostrar</span>,
                  hide: <span>No mostrar</span>,
                },
              },
              {
                type: "password",
                name: "password2",
                label: "Contraseña 2",
                variant: "outlined",
              },
              {
                type: "date",
                name: "date",
                label: "Date Input",
                variant: "filled",
                value: "April 22, 1998 16:20",
                dialogMessages: {
                  cancelLabel: "Cancelar",
                  clearLabel: "Restablecer",
                  okLabel: "Aceptar",
                },
              },
              {
                type: "time",
                name: "time",
                label: "Time Input",
                variant: "outlined",
                value: "April 22, 1998 16:20",
                dialogMessages: {
                  cancelLabel: "Cancelar",
                  clearLabel: "Restablecer",
                  okLabel: "Aceptar",
                },
                helperTexts: ["Formato 24hs"],
              },
              {
                type: "datetime",
                name: "datetime",
                label: "DateTime Input",
                variant: "standard",
                value: "April 22, 1998 16:20",
                dialogMessages: {
                  cancelLabel: "Cancelar",
                  clearLabel: "Restablecer",
                  okLabel: "Aceptar",
                },
                helperTexts: ["Fecha formato 24hs"],
              },
              {
                type: "file",
                name: "media",
                fileAreaDisabled: false,
                fileAreaIcon: <img src="/logo.svg" style={{ width: 100 }} />,
                fileAreaTitle: { text: "Ejemplo de Título", size: 18 },
                fileAreaDescription: {
                  text: "Ejemplo de descripción",
                  size: 14,
                },
                fileType: "image/*",
                fileAcceptMultiple: false,
              },
              {
                type: "file",
                name: "media2",
                fileAreaDisabled: false,
                fileAreaIcon: <img src="/logo.svg" style={{ width: 100 }} />,
                fileAreaTitle: { text: "Ejemplo de Título", size: 18 },
                fileAreaDescription: {
                  text: "Ejemplo de descripción",
                  size: 14,
                },
                fileType: "image/*",
                fileAcceptMultiple: true,
              },
            ]}
          />
        }
        button={
          <button
            style={{
              border: "none",
              padding: "10px 20px",
              borderRadius: 20,
              backgroundColor: "var(--main-color)",
              color: "#ffffff",
            }}
          >
            Abrir Modal Ejemplo
          </button>
        }
        disableBackdrop={false}
      />
    </div>
  );
}
