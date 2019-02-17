import alphabet from './alphabet';

const colors = [
    '#f8ffba',
    '#332431',
    '#573752',
    '#784465',
    '#8f476a',
    '#a64c6c',
    '#d9577c'
];

const bg = 3;


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const getPixel = ({ ctx, x, y }) => {
    const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;

    if (a != 255) {
        return bg;
    }

    let hex = rgbToHex(r, g, b);

    let col = colors.findIndex(hex);

    if (col == -1) {
        return bg;
    }

    return col;
}


const line = ({ ctx, x1, y1, x2, y2, color }) => {
    // Iterators, counters required by algorithm
    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;

    // Calculate line deltas
    dx = x2 - x1;
    dy = y2 - y1;

    // Create a positive copy of deltas (makes iterating easier)
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);

    // Calculate error intervals for both axis
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;

    // The line is X-axis dominant
    if (dy1 <= dx1) {

        // Line is drawn left to right
        if (dx >= 0) {
            x = x1; y = y1; xe = x2;
        } else { // Line is drawn right to left (swap ends)
            x = x2; y = y2; xe = x1;
        }

        setPixel({ ctx, x, y, color });

        // Rasterize the line
        for (i = 0; x < xe; i++) {
            x = x + 1;

            // Deal with octants...
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }

            // Draw pixel from line span at currently rasterized position
            setPixel({ ctx, x, y, color });
        }

    } else { // The line is Y-axis dominant

        // Line is drawn bottom to top
        if (dy >= 0) {
            x = x1; y = y1; ye = y2;
        } else { // Line is drawn top to bottom
            x = x2; y = y2; ye = y1;
        }

        setPixel({ ctx, x, y, color });

        // Rasterize the line
        for (i = 0; y < ye; i++) {
            y = y + 1;

            // Deal with octants...
            if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                } else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }

            // Draw pixel from line span at currently rasterized position
            setPixel({ ctx, x, y, color });
        }
    }
}

const setPixel = ({ ctx, x, y, color }) => {
    ctx.fillStyle = colors[color % colors.length];
    ctx.fillRect(x, y, 1, 1);
}

const clear = ({ ctx }) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

const print = ({ ctx, x, y, str, color }) => {
    const c = colors[color % colors.length];

    const spaces = str
        .split('')
        .map(letter => {

        });
}

const createAPI = ({ ctx, width, height }) => {
    return {
        getPixel(x, y) {
            getPixel({ctx, x, y});
        },
        setPixel(x, y, color) {
            setPixel({ctx, x, y, color});
        },
        line(x1, y1, x2, y2, color) {
            line({ctx, x1, y1, x2, y2, color});
        },
        clear() {
            clear({ ctx });
        }
    };
};

export default createAPI;
