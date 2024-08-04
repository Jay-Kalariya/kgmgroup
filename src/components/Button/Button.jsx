import styles from "@/components/Button/button.module.css";
import { useRouter } from "next/navigation";
function Button({text, url}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className={styles.button1}
      role="button"
    >
      <span className={styles.text1}>{text}</span>
      <span className={styles.text1}>{text}</span>
    </button>





  );
}
export default Button;
