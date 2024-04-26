import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Stuff {
    private int y;
    private int size = 30;

    private int width = 300;
    private int height = 200;

    public void writeGradient(String name, String add, boolean line) {
        try {
            y++;
            FileWriter a = new FileWriter(new File("data/" + name));
            for (int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    square(a, i, j, add);
                }
                if (line)
                    a.write("\n");
            }
            a.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private void rand(FileWriter a, int i, int j, String add) throws IOException {
        a.write(numToHex((int)(Math.random() * 255)) + numToHex((int)(Math.random() * 255)) + numToHex((int)(Math.random() * 255)) + add);
    }

    private void grid(FileWriter a, int i, int j, String add) throws IOException {
        if (i % 2 == 0 ^ j % 2 == 0) {
            a.write("FFFFFF" + add);
        } else {
            a.write("000000" + add);
        }
    }

    private void square(FileWriter a, int i, int j, String add) throws IOException {
        String out;
        int moveAmount = 5;
        if ((j - width / 2 < size && j - width / 2 > -size) && (i - height / 2 < (Math.sin(y) * moveAmount) + size && i - height / 2 > (Math.sin(y) * moveAmount) - size)) {
            out = "FFFFFF";
        } else {
            out = "000000";
        }
        a.write(out + add);
    }

    private String numToHex(int num) {
        double transformedI = ((double) num) * (256.0 / 300.0);
        String out = Integer.toHexString((int) Math.round(transformedI));
        return out.length() == 1 ? "0" + out : out;
    }
}