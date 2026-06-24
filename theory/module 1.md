
---

# 📘 ГЛАВА 1. ЗНАКОМСТВО С TYPESCRIPT

---

## Вступление

TypeScript — это не новый язык, а **надстройка над JavaScript**. Он делает код предсказуемым, а разработку — безопасной. В этой главе мы настроим окружение, напишем первую программу и поймём, зачем всё это нужно.

---

## §1. Что такое TypeScript и зачем он нужен

JavaScript — язык динамический. Ошибки проявляются только во время выполнения:

```javascript
// ❌ JavaScript
function greet(name) {
    return "Hello, " + name;
}
greet(42); // "Hello, 42" — не ошибка, но бессмыслица
```

TypeScript добавляет **статическую проверку типов**:

```typescript
// ✅ TypeScript
function greet(name: string): string {
    return "Hello, " + name;
}
greet(42); // ❌ Ошибка на этапе компиляции
```

**Что даёт TypeScript:**
- Раннее обнаружение ошибок
- Умный автодополнение в редакторе
- Самодокументируемый код
- Требование в 80% вакансий React

---

## §2. Установка и настройка окружения

TypeScript устанавливается через npm (Node Package Manager).

**Шаг 1. Проверить Node.js и npm**
```bash
node --version  # v22.23.0 ✅
npm --version   # 10.9.8 ✅
```

**Шаг 2. Установить TypeScript глобально**
```bash
sudo npm install -g typescript
```

**Шаг 3. Проверить установку**
```bash
tsc --version  # Version 6.0.3 ✅
```

**Что такое `tsc`?** — TypeScript Compiler. Он превращает `.ts` файлы в обычный `.js`, понятный браузеру и Node.js.

---

## §3. Первая программа

Создадим первый TypeScript-файл.

**1. Создать папку проекта:**
```bash
mkdir ~/ts-learning
cd ~/ts-learning
```

**2. Создать файл `index.ts`:**
```bash
nano index.ts
```

**3. Написать код:**
```typescript
const message: string = "Hello, TypeScript!";
console.log(message);
```

Обрати внимание на `: string` — это **аннотация типа**. Мы говорим TS: "message должен быть строкой".

**4. Скомпилировать и запустить:**
```bash
tsc index.ts   # создаст index.js
node index.js  # Hello, TypeScript!
```

---

## §4. tsconfig.json — конфигурация

Для больших проектов удобнее использовать файл конфигурации.

**Создать `tsconfig.json`:**
```bash
nano tsconfig.json
```

**Минимальная конфигурация:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "outDir": "./dist"
  }
}
```

**Что означают настройки:**
- `target: "ES2020"` — в какой стандарт JS компилировать
- `strict: true` — строгий режим (все проверки включены)
- `outDir: "./dist"` — куда класть скомпилированные файлы

После создания `tsconfig.json` можно компилировать просто:
```bash
tsc
```

---

## §5. Базовые типы

TypeScript имеет несколько встроенных типов.

| Тип | Описание | Пример |
|-----|----------|--------|
| `string` | Строки | `"Hello"` |
| `number` | Числа | `42`, `3.14` |
| `boolean` | Логические | `true`, `false` |
| `any` | Любой тип (отключает проверку) | Использовать **не рекомендуется** |
| `unknown` | Безопасная альтернатива any | Требует проверки |
| `void` | Отсутствие возврата | Для функций без `return` |
| `never` | Функция никогда не завершается | `throw` или бесконечный цикл |

**Примеры:**
```typescript
let username: string = "Alex";
let age: number = 25;
let isActive: boolean = true;
let data: any = "anything";     // ❌ плохо
let error: unknown = "unknown"; // ✅ лучше, требует проверки

function log(message: string): void {
    console.log(message);
}

function throwError(): never {
    throw new Error("Ошибка!");
}
```

---

## §6. Type Inference (вывод типов)

TypeScript **угадывает** тип, если его не указать явно.

```typescript
let city = "Moscow";     // TS выводит тип string
let count = 10;          // TS выводит тип number
let isReady = false;     // TS выводит тип boolean
```

Это называется **type inference**. Показывает, как TS экономит время разработчика, не теряя безопасности.

---

## §7. const vs let с типами

```typescript
const PI: number = 3.14;   // неизменяемая константа
let counter: number = 0;   // изменяемая переменная
```

`const` не даёт переприсвоить значение, `let` позволяет. Типы работают одинаково.

---

## §8. any vs unknown

| `any` | `unknown` |
|-------|-----------|
| Отключает проверку типов | Требует проверки перед использованием |
| Опасен | Безопасен |
| `let x: any = 5; x.toUpperCase();` — ошибка в рантайме | `let x: unknown = 5; if (typeof x === "string") x.toUpperCase();` — безопасно |

**Правило:** Используй `unknown` вместо `any` всегда, где возможно.

---

## §9. Практика — Checkpoint 1

Чтобы перейти к Главе 2, нужно выполнить задание.

**Задание:** Создай файл `checkpoint1.ts` и напиши функцию `greet`:

```typescript
function greet(name: string, age: number, isAdmin: boolean = false): string {
    // Твой код здесь
    // Возвращает строку в формате:
    // "Привет, {name}! Тебе {age} лет. Ты администратор / Ты не администратор"
}

console.log(greet("Alex", 25, true));
console.log(greet("Maria", 30));
```

**Ожидаемый вывод:**
```
Привет, Alex! Тебе 25 лет. Ты администратор
Привет, Maria! Тебе 30 лет. Ты не администратор
```

**Условие прохода:**
- Код компилируется (`tsc checkpoint1.ts`)
- Запускается (`node checkpoint1.js`)
- Вывод совпадает с ожидаемым
- Нет ошибок TypeScript

---

## §10. Итоги главы

**Мы изучили:**
- Что такое TypeScript и зачем он нужен
- Как установить и настроить окружение
- Как написать первую программу
- Как работает `tsconfig.json`
- Базовые типы: string, number, boolean, any, unknown, void, never
- Что такое type inference (вывод типов)
- Разницу между const и let
- Разницу между any и unknown

**Ты готов к Главе 2**, если прошёл Checkpoint 1.

---

## 📊 Прогресс

```
Глава 1: Знакомство с TypeScript
├── §1. Что такое TypeScript        ✅ прочитано
├── §2. Установка                   ✅ выполнено
├── §3. Первая программа            ✅ выполнено
├── §4. tsconfig.json               ✅ прочитано
├── §5. Базовые типы                ✅ прочитано
├── §6. Type Inference              ✅ прочитано
├── §7. const vs let                ✅ прочитано
├── §8. any vs unknown              ✅ прочитано
├── §9. Checkpoint 1                ⬜ выполнить
└── §10. Итоги                      ⬜ после Checkpoint
```

---

## 🚀 ТЕКУЩИЙ ШАГ

**Ты здесь:** Глава 1 → §9. Checkpoint 1 (выполнить задание)

Напиши функцию `greet`, скомпилируй и покажи результат. Я проверю и подтвержу переход к Главе 2.