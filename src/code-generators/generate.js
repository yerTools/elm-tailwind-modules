export function elmString(content) {
    return `"${content
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        }"`;
}

export const elmFunctionCall = (firstLine, nextLine) => indentation => firstLine + "\n" + nextLine(indentation + 1)

export const elmList = elements => indentation => {
    const indent = " ".repeat(Math.max(0, indentation * 4));
    if (elements.length === 0) {
        return indent + "[]";
    }
    let str = "";
    let idx = 0;
    elements.forEach(elem => {
        str += indent;
        str += idx === 0 ? "[ " : ", ";
        str += elem(indentation);
        str += "\n";
        idx++;
    });
    str += indent;
    str += "]";
    return str;
}

export const indented = str => indentation => " ".repeat(Math.max(0, indentation * 4)) + str(indentation);