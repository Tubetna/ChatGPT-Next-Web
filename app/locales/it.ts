import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const it: LocaleType = {
  WIP: "Work in progress...",
  Error: {
    Unauthorized:
      "Accesso non autorizzato, inserire il codice di accesso nella pagina delle impostazioni.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messaggi`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messaggi con ChatGPT`,
    Actions: {
      ChatList: "Vai alla Chat List",
      CompressedHistory: "Prompt di memoria della cronologia compressa",
      Export: "Esportazione di tutti i messaggi come Markdown",
      Copy: "Copia",
      Stop: "Stop",
      Retry: "Riprova",
      Delete: "Delete",
    },
    Rename: "Rinomina Chat",
    Typing: "Typing…",
    Input: (submitKey: string) => {
      var inputHints = `Scrivi qualcosa e premi ${submitKey} per inviare`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", premi Shift + Enter per andare a capo";
      }
      return inputHints;
    },
    Send: "Invia",
  },
  Export: {
    Title: "Tutti i messaggi",
    Copy: "Copia tutto",
    Download: "Scarica",
    MessageFromYou: "Messaggio da te",
    MessageFromChatGPT: "Messaggio da ChatGPT",
  },
  Memory: {
    Title: "Prompt di memoria",
    EmptyContent: "Vuoto.",
    Copy: "Copia tutto",
    Send: "Send Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Ripristinare cancellerà la conversazione corrente e la cronologia di memoria. Sei sicuro che vuoi riavviare?",
  },
  Home: {
    NewChat: "Nuova Chat",
    DeleteChat: "Confermare la cancellazione della conversazione selezionata?",
    DeleteToast: "Chat Cancellata",
    Revert: "Revert",
  },
  Settings: {
    Title: "Impostazioni",
    SubTitle: "Tutte le impostazioni",
    Actions: {
      ClearAll: "Cancella tutti i dati",
      ResetAll: "Resetta tutte le impostazioni",
      Close: "Chiudi",
      ConfirmResetAll: {
        Confirm: "Sei sicuro vuoi cancellare tutte le impostazioni?",
      },
      ConfirmClearAll: {
        Confirm: "Sei sicuro vuoi cancellare tutte le chat?",
      },
    },
    Lang: {
      Name: "Lingue",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Tiếng Việt",
      },
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Dimensione carattere",
      SubTitle: "Regolare la dimensione dei caratteri del contenuto della chat",
    },
    Update: {
      Version: (x: string) => `Versione: ${x}`,
      IsLatest: "Ultima versione",
      CheckUpdate: "Controlla aggiornamenti",
      IsChecking: "Sto controllando gli aggiornamenti...",
      FoundUpdate: (x: string) => `Trovata nuova versione: ${x}`,
      GoToUpdate: "Aggiorna",
    },
    SendKey: "Tasto invia",
    Theme: "Tema",
    TightBorder: "Schermo intero",
    SendPreviewBubble: "Anteprima di digitazione",
    Prompt: {
      Disable: {
        Title: "Disabilita l'auto completamento",
        SubTitle: "Input / per attivare il completamento automatico",
      },
      List: "Elenco dei suggerimenti",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Modifica",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
      },
    },
    HistoryCount: {
      Title: "Conteggio dei messaggi allegati",
      SubTitle: "Numero di messaggi inviati allegati per richiesta",
    },
    CompressThreshold: {
      Title: "Soglia di compressione della cronologia",
      SubTitle:
        "Comprimerà se la lunghezza dei messaggi non compressi supera il valore",
    },
    Token: {
      Title: "API Key",
      SubTitle:
        "Utilizzare la chiave per ignorare il limite del codice di accesso",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Bilancio Account",
      SubTitle(used: any, total: any) {
        return `Attualmente usato in questo mese $${used}, soglia massima $${total}`;
      },
      IsChecking: "Controllando...",
      Check: "Controlla ancora",
      NoAccess: "Inserire la chiave API per controllare il saldo",
    },
    AccessCode: {
      Title: "Codice d'accesso",
      SubTitle: "Controllo d'accesso abilitato",
      Placeholder: "Inserisci il codice d'accesso",
    },
    Model: "Modello GPT",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Un valore maggiore rende l'output più casuale",
    },
    MaxTokens: {
      Title: "Token massimi",
      SubTitle: "Lunghezza massima dei token in ingresso e dei token generati",
    },
    PresencePenlty: {
      Title: "Penalità di presenza",
      SubTitle:
        "Un valore maggiore aumenta la probabilità di parlare di nuovi argomenti",
    },
  },
  Store: {
    DefaultTopic: "Nuova conversazione",
    BotHello: "Ciao, come posso aiutarti oggi?",
    Error: "Qualcosa è andato storto, riprova più tardi.",
    Prompt: {
      History: (content: string) =>
        "Questo è un riassunto della cronologia delle chat tra l'IA e l'utente:" +
        content,
      Topic:
        "Si prega di generare un titolo di quattro o cinque parole che riassuma la nostra conversazione senza alcuna traccia, punteggiatura, virgolette, punti, simboli o testo aggiuntivo. Rimuovere le virgolette",
      Summarize:
        "Riassumi brevemente la nostra discussione in 200 caratteri o meno per usarla come spunto per una futura conversazione.",
    },
    ConfirmClearAll:
      "Confermi la cancellazione di tutti i dati della chat e delle impostazioni?",
  },
  Copy: {
    Success: "Copiato sugli appunti",
    Failed:
      "Copia fallita, concedere l'autorizzazione all'accesso agli appunti",
  },
  Context: {
    Toast: (x: any) => `Con ${x} prompts contestuali`,
    Edit: "Prompt contestuali e di memoria",
    Add: "Aggiungi altro",
  },
};

export default it;
