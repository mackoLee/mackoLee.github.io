import os

paths = [
    './', './tests', './tests/i18n'
]

index_path = "../index.html"

if __name__ == '__main__':
    print(index_path)
    with open(index_path, 'r') as index_file:
        for path in paths:
            if not os.path.exists(path):
                os.makedirs(path)
            print("Created path: " + path)
            with open(path + '/index.html', 'w') as f:
                f.write(index_file.read())
                f.close()


